interface Props {
  children: JSX.Element;
  width: string;
  height: string;
}

const IconContainer = ({ children, width, height, ...props }: Props) => {
  return <div style={{ width, height, ...props }}>{children}</div>;
};

export default IconContainer;
