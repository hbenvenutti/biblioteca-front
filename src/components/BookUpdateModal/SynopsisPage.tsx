import React from 'react';
import { Content } from './styles';

interface SynopsisPageProps {
  text: string;
  onChange: (value: string) => void;
}

export const SynopsisPage = (props: SynopsisPageProps) => {
  return (
    <Content>
      <div>
        <label>Sinopse</label>
        <textarea defaultValue={props.text} onChange={(e) => props.onChange(e.target.value)}/>
      </div>
    </Content>
  )
}
