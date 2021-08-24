import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVoiceOverOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVoiceOverOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVoiceOverOff["size"];
}
interface RuxIconVoiceOverOffEvents {
}
interface RuxIconVoiceOverOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVoiceOverOff extends SvelteComponent {
    $$prop_def: RuxIconVoiceOverOffProps;
    $$events_def: RuxIconVoiceOverOffEvents;
    $$slot_def: RuxIconVoiceOverOffSlots;
    $on<K extends keyof RuxIconVoiceOverOffEvents>(type: K, callback: (e: RuxIconVoiceOverOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVoiceOverOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVoiceOverOffElement | undefined;
}
export default RuxIconVoiceOverOff;
