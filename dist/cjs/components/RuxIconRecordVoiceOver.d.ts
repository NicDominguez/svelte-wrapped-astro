import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRecordVoiceOverProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRecordVoiceOver["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRecordVoiceOver["size"];
}
interface RuxIconRecordVoiceOverEvents {
}
interface RuxIconRecordVoiceOverSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRecordVoiceOver extends SvelteComponent {
    $$prop_def: RuxIconRecordVoiceOverProps;
    $$events_def: RuxIconRecordVoiceOverEvents;
    $$slot_def: RuxIconRecordVoiceOverSlots;
    $on<K extends keyof RuxIconRecordVoiceOverEvents>(type: K, callback: (e: RuxIconRecordVoiceOverEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRecordVoiceOverProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRecordVoiceOverElement | undefined;
}
export default RuxIconRecordVoiceOver;
