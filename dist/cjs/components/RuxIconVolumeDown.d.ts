import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVolumeDownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVolumeDown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVolumeDown["size"];
}
interface RuxIconVolumeDownEvents {
}
interface RuxIconVolumeDownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVolumeDown extends SvelteComponent {
    $$prop_def: RuxIconVolumeDownProps;
    $$events_def: RuxIconVolumeDownEvents;
    $$slot_def: RuxIconVolumeDownSlots;
    $on<K extends keyof RuxIconVolumeDownEvents>(type: K, callback: (e: RuxIconVolumeDownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVolumeDownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVolumeDownElement | undefined;
}
export default RuxIconVolumeDown;
