import styled from "styled-components";

export const theme = {
  colors: {
    base: "#453750",          // RGB(69,55,80)
    bgDark: "#2b2233",
    bgLight: "#5c4b6a",
    card: "#1e1824",
    accentLight: "#a48cc2",
    accentBright: "#d6b6ff",
    textPrimary: "#ffffff",
    textMuted: "#c7bdd3",
    danger: "#ff6b6b"
  }
};

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 1rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.accentLight};
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.accentBright};
  }
`;
