import React from 'react';
import { ListItemStyle } from './styles';

interface ListItemProps {
  error: boolean;
  text: string;
}
export const ListItem = (props: ListItemProps) => {
  return (
    <ListItemStyle error={props.error}>
      {props.text}
    </ListItemStyle>
  )
}
