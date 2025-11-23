'use client';

import { useEffect, useRef } from 'react';
import styles from './transformer-background.module.scss';

export default function TransformerBackground() {
  const canvasRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const nodesRef = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let isActive = true;
    
    const resize = () => {
      if (!canvas || !isActive) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };
    
    const initNodes = () => {
      if (!canvas || !isActive) return;
      nodesRef.current = [];
      const numNodes = Math.min(Math.floor((canvas.width * canvas.height) / 30000), 50);
      
      for (let i = 0; i < numNodes; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1
        });
      }
    };
    
    const drawNode = (node) => {
      if (!ctx || !isActive) return;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, ${0.6 + Math.random() * 0.4})`;
      ctx.fill();
      
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    };
    
    const drawConnection = (node1, node2, distance, maxDistance) => {
      if (!ctx || !isActive) return;
      const opacity = 1 - (distance / maxDistance);
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };
    
    const updateNodes = () => {
      if (!canvas || !isActive) return;
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
    };
    
    const animate = () => {
      if (!canvas || !ctx || !isActive) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateNodes();
      
      const maxDistance = 150;
      const nodes = nodesRef.current;
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            drawConnection(nodes[i], nodes[j], distance, maxDistance);
          }
        }
      }
      
      // Draw nodes
      nodes.forEach(drawNode);
      
      if (isActive) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
      }
    };
    
    resize();
    animate();
    
    window.addEventListener('resize', resize);
    
    return () => {
      isActive = false;
      window.removeEventListener('resize', resize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      nodesRef.current = [];
    };
  }, []);
  
  return (
    <div className={styles.transformerBackground}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.gradientOverlay} />
    </div>
  );
}
