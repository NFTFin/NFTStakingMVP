import React, { forwardRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface DialogProps {
	visible: boolean;
	mask?: boolean;
	maskStyles?: object;
	onMaskClick?: Function;
	children?: React.ReactNode;
	onPressEnter?: (e: KeyboardEvent) => void;
	onPressEsc?: (e: KeyboardEvent) => void;
}

const Modal = forwardRef<HTMLDivElement, DialogProps>((props: DialogProps, ref) => {
	const {
		visible,
		onMaskClick,
		children,
		maskStyles,
		// onClick,
		onPressEnter = () => {},
		onPressEsc = () => {},
		...restProps
	} = props;
	const [show, setShow] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (visible) {
			setShow(true);
		}
	}, [visible]);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.keyCode === 13) onPressEnter(e);
		else if (e.keyCode === 27) onPressEsc(e);
	};

	useEffect(() => {
		if (visible) {
			document.addEventListener('keydown', handleKeyDown);
		} else {
			document.removeEventListener('keydown', handleKeyDown);
		}
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [visible]);

	if (typeof window === 'undefined') {
		return null;
	}

	return show
		? ReactDOM.createPortal(
				<div
					className="flex fixed top-0 item-center left-0 right-0 bottom-0 justify-center bg-mask"
					ref={ref}
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 100,
						// background: 'rgba(0,0,0,0.5)',
						...maskStyles,
					}}
					onClick={e => {
						e.target === e.currentTarget && onMaskClick && onMaskClick(e);
					}}>
					<div
						className={visible ? 'animate-zoomIn' : 'animate-fadeOut'}
						style={{
							position: 'relative',
							boxShadow: 'dialog',
							borderRadius: 'large',
							background: '#FFF',
							// animation: visible ? `zoomIn 0.3s ease-in-out` : `fadeOut 0.3s ease-in-out`,
							animationIterationCount: 1,
						}}
						onAnimationEnd={() => {
							setShow(visible);
						}}
						{...restProps}
						// onClick={onClick}>
					>
						{children}
					</div>
				</div>,
				document.body
		  )
		: null;
});

Modal.displayName = 'Modal';

export default Modal;
