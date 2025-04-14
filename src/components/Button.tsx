interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  extraClasses?: string;
}

const Button = ({ children, extraClasses = "", ...props }: ButtonProps) => {
  return (
    <button
      className={
        "flex gap-2 justify-center items-center text-primary px-4 py-2 hover:bg-secondary-4 w-fit h-fit cursor-pointer rounded-lg " +
        extraClasses
      }
      {...props}
    >
      {children}
    </button>
  );
};

export const IconButton = ({
  children,
  extraClasses = "",
  ...props
}: ButtonProps) => {
  return (
    <Button extraClasses={"!p-2 !h-[26px] !rounded" + extraClasses} {...props}>
      {children}
    </Button>
  );
};

export default Button;
