import { useState, useEffect } from "react";
import { isWithinInterval } from "date-fns";
import { Button, Card } from "../styles";
import undress from "../assets/undress.m4a"; // ✅ updated
import peek from "../assets/peek.jpg";
import styled from "styled-components";

const Alert = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.accentBright};
  padding: 1rem;
  border-radius: 8px;
  animation: pulse 1.5s infinite, shake 0.2s ease-in-out infinite alternate;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.75; }
    100% { opacity: 1; }
  }

  @keyframes shake {
    from { transform: translateX(-1px); }
    to { transform: translateX(1px); }
  }
`;

const LiveDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.danger};
  border-radius: 50%;
  margin-right: 6px;
  animation: blink 1s infinite;

  @keyframes blink {
    50% { opacity: 0.3; }
  }
`;

export default function NowChecker({ events }) {
  const [showPeek, setShowPeek] = useState(false);
  const now = new Date();

  const match = events.find(e =>
    isWithinInterval(now, { start: e.start, end: e.end })
  );

  return (
    <Card>
      <h3>Is Tom nude right now?</h3>

      {match ? (
        <Alert>
          <p>
            <LiveDot />
            <strong>YES.</strong> Situation is ongoing.
          </p>

          <Button onClick={() => new Audio(undress).play()}>
            Listen In
          </Button>

          <Button onClick={() => setShowPeek(true)}>
            Take a Peek
          </Button>

          {showPeek && (
            <div>
              <img src={peek} alt="peek" width="200" />
              <p>You’ve seen enough.</p>
            </div>
          )}
        </Alert>
      ) : (
        <p>Tom has chosen clothing.</p>
      )}
    </Card>
  );
}
