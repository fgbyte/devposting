type Props = {
	className: string;
};

const AppLogo: React.FC<Props> = ({ className }) => (
	<img className={className} src="/favicon.png" alt="logo" />
);
export default AppLogo;
