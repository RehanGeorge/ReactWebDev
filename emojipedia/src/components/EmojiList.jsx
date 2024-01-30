import { emojipedia } from "../emojipedia";
import Emoji from "./Emoji";

export default function EmojiList() {
    return (
        <div>
            <dl className="dictionary">
                {emojipedia.map((emoji) => (
                    <Emoji key={emoji.id} {...emoji} />
                ))}
            </dl>
        </div>
    )
}