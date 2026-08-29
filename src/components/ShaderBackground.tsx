import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

interface ShaderBackgroundProps {
  intensity?: number;
}

export const ShaderBackground: React.FC<ShaderBackgroundProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }
    }

    syncSize();
    window.addEventListener('resize', syncSize);

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    vec2 uv = v_texCoord;
    vec2 normMouse = u_mouse / u_resolution;
    
    // Create slow, subtle background gradient animation
    vec3 color1 = vec3(0.06, 0.06, 0.08); // Dark surface
    vec3 color2 = vec3(0.0, 0.55, 0.88); // Accent blue (#009de0)
    vec3 color3 = vec3(0.12, 0.08, 0.22); // Subtle indigo hint
    
    float noise1 = sin(uv.x * 2.5 + u_time * 0.15) * cos(uv.y * 2.0 + u_time * 0.2) * 0.5 + 0.5;
    float distMouse = distance(uv, vec2(normMouse.x, 1.0 - normMouse.y));
    float mouseGlow = smoothstep(0.5, 0.0, distMouse) * 0.06;
    
    vec3 mixed = mix(color1, color3 * 0.6, uv.y * 0.4);
    vec3 finalColor = mix(mixed, color2 * 0.08, noise1) + vec3(0.0, 0.4, 0.8) * mouseGlow;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(prog));
      return;
    }

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrameId.current = requestAnimationFrame(render);
    }

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      if (gl) {
        gl.deleteProgram(prog);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
        gl.deleteBuffer(buf);
      }
    };
  }, [isEnabled]);

  return (
    <>
      {/* Background Canvas */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundColor: '#121214',
          transition: 'opacity 0.6s ease',
        }}
      >
        {isEnabled ? (
          <canvas
            ref={canvasRef}
            className="w-full h-full block opacity-95"
            style={{ width: '100vw', height: '100vh' }}
          />
        ) : (
          <div className="w-full h-full bg-[#121214]" />
        )}
        {/* Subtle grid texture overlay for high-end developer terminal feel */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Floating Canvas Effect Toggle control */}
      <div className="fixed bottom-4 right-4 z-40 no-print">
        <button
          id="toggle-shader-btn"
          type="button"
          onClick={() => setIsEnabled(!isEnabled)}
          className="flex items-center gap-2 text-xs font-mono-code px-3 py-1.5 rounded-full bg-[#1c1c20]/90 border border-white/10 text-neutral-400 hover:text-white hover:border-[#009de0]/50 backdrop-blur-md transition-all shadow-lg hover:shadow-[#009de0]/10"
          title={isEnabled ? 'Pause animated shader' : 'Enable animated shader'}
        >
          <Sparkles className={`w-3.5 h-3.5 ${isEnabled ? 'text-[#8aceff] animate-pulse' : 'text-neutral-500'}`} />
          <span>Shader: {isEnabled ? 'Active' : 'Muted'}</span>
          {isEnabled ? <Eye className="w-3 h-3 text-neutral-400" /> : <EyeOff className="w-3 h-3 text-neutral-500" />}
        </button>
      </div>
    </>
  );
};
