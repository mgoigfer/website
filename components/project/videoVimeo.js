/* Vendor */
import React from 'react';
import styled from 'styled-components';

export default function({ vimeoId }) {
  return (
    <Player>
      <Iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        frameBorder="0"
        allowFullScreen
      />
    </Player>
  );
}

const Player = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
