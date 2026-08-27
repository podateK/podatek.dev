import React, { useEffect, useState } from "react";

const palette = {
  bg: "#15161a",
  panel: "#0b0c0f",
  border: "#26272c",
  text: "#e9e9ec",
  muted: "#9a9ba3",
  accent: "#e2a33d", // miedziany / groszowy akcent
};

export default function PodatekDevCard({
  url = "podatek.dev",
  name = "podatek.dev",
  tagline = "Developer. Buduję strony, aplikacje i inne rzeczy, które po prostu działają.",
  path = "~/home",
  avatarLetter = "P",
}) {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={styles.wrapper}>
      <a
        href={`https://${url}/`}
        target="_blank"
        rel="noreferrer"
        style={styles.linkLabel}
      >
        https://{url}/
      </a>

      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.avatar}>{avatarLetter}</div>
          <div>
            <div style={styles.name}>{name}</div>
            <div style={styles.tagline}>{tagline}</div>
          </div>
        </div>

        <div style={styles.terminal}>
          <span style={styles.prompt}>$</span>
          <span style={styles.path}>{path}</span>
          <span
            style={{
              ...styles.cursor,
              opacity: showCursor ? 1 : 0,
            }}
          >
            █
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    maxWidth: 420,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  linkLabel: {
    color: "#6ea8fe",
    fontSize: 14,
    textDecoration: "none",
  },
  card: {
    background: palette.bg,
    border: `1px solid ${palette.border}`,
    borderRadius: 12,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: palette.accent,
    color: "#1a1a1a",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    flexShrink: 0,
  },
  name: {
    color: palette.text,
    fontWeight: 600,
    fontSize: 15,
  },
  tagline: {
    color: palette.muted,
    fontSize: 13,
    marginTop: 2,
    lineHeight: 1.4,
  },
  terminal: {
    background: palette.panel,
    border: `1px solid ${palette.border}`,
    borderRadius: 8,
    padding: "18px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
    fontSize: 14,
  },
  prompt: {
    color: palette.accent,
  },
  path: {
    color: palette.text,
  },
  cursor: {
    color: palette.accent,
    transition: "opacity 0.1s",
  },
};
