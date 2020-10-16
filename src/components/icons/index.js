import AttachFileIcon from './attach-file';
import CameraIcon from './camera';
import EmojiIcon from './emoji';
import SendIcon from './send';

export default function getIcon(name) {
	switch (name) {
		case 'AttachFile':
			return <AttachFileIcon />;
		case 'Camera':
			return <CameraIcon />;
		case 'Emoji':
			return <EmojiIcon />;
		case 'Send':
			return <SendIcon />;
	}
}
