import React from 'react';

type SoundBarProps = {
  previewUrl: string,
};

function SoundBar({ previewUrl }: SoundBarProps) {
  return (
    <audio
      className="w-full absolute bottom-0 left-0 right-0"
      data-testid="audio-component"
      src={ previewUrl }
      controls
    >
      <track kind="captions" />
      O seu navegador não suporta o elemento
      <code>audio</code>
      .
    </audio>

  );
}

export default SoundBar;
