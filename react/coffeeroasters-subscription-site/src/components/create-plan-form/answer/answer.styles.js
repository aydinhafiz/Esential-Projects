import styled from "styled-components";

const SAnswer = styled.button`
  padding: 32px 28px 84px 28px;
  max-width: 228px;
  border-radius: 8px;
  background: #f4f1eb;
  border: none;

  ${(props) =>
    props.$clicked ? "background:#0E8784; color: #FFF;" : "background:#f4f1eb;"}

  cursor: pointer;
  &:hover {
    background: #fdd6ba;
  }
  .answer-title {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 28px;
  }

  .answer-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;

export default SAnswer;
