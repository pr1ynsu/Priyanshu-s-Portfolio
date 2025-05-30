// src/components/Transition/Curve.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { text, curve, translate } from './anim';
import './style.scss';

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/work": "Work"
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit"
});

export default function Curve({ children, backgroundColor = "#222222" }) {
  const location = useLocation();
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className="background" />
      <motion.p className="route" {...anim(text)}>
        {routes[location.pathname] || ""}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;
  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path fill="#333333" {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
