// components/form/Description.tsx

import { Input } from 'antd';

const { TextArea } = Input;

interface DescriptionProps {
    value: string;
    onChange: (value: string) => void;
    }
const Description = ({ value, onChange }:DescriptionProps) => (
  <TextArea
    value={value}
    onChange={e => onChange(e.target.value)}
    rows={4}
  />
);

export default Description;
