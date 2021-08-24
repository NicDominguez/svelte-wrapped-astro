import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardVoiceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardVoice["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardVoice["size"];
}
interface RuxIconKeyboardVoiceEvents {
}
interface RuxIconKeyboardVoiceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardVoice extends SvelteComponent {
    $$prop_def: RuxIconKeyboardVoiceProps;
    $$events_def: RuxIconKeyboardVoiceEvents;
    $$slot_def: RuxIconKeyboardVoiceSlots;
    $on<K extends keyof RuxIconKeyboardVoiceEvents>(type: K, callback: (e: RuxIconKeyboardVoiceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardVoiceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardVoiceElement | undefined;
}
export default RuxIconKeyboardVoice;
