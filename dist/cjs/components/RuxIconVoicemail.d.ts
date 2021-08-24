import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVoicemailProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVoicemail["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVoicemail["size"];
}
interface RuxIconVoicemailEvents {
}
interface RuxIconVoicemailSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVoicemail extends SvelteComponent {
    $$prop_def: RuxIconVoicemailProps;
    $$events_def: RuxIconVoicemailEvents;
    $$slot_def: RuxIconVoicemailSlots;
    $on<K extends keyof RuxIconVoicemailEvents>(type: K, callback: (e: RuxIconVoicemailEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVoicemailProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVoicemailElement | undefined;
}
export default RuxIconVoicemail;
