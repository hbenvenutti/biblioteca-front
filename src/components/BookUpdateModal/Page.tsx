import React from 'react';
import { Content } from './styles';

interface PageProps {
  label1: string;
  label2: string;
  defaultValue1: string;
  defaultValue2: string;
  onChange1: (value: string) => void
  onChange2: (value: string) => void
}

export const Page = (props: PageProps) => {
  return (
    <Content>
      <div>
        <label htmlFor={props.label1}>{props.label1}</label>
        <input id={props.label1} defaultValue={props.defaultValue1} onChange={(e) => props.onChange1(e.target.value)}/>
      </div>
      <div>
        <label htmlFor={props.label2}>{props.label2}</label>
        <input id={props.label2} defaultValue={props.defaultValue2} onChange={(e) => props.onChange2(e.target.value)}/>
      </div>
    </Content>
  )
}
