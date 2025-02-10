type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({children}: ContainerProps) {
    return (
        <div className="mt-2 pt-10">
            {children}
        </div>
    )
}
