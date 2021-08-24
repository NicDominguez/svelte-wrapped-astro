import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMusicOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMusicOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMusicOff["size"];
}
interface RuxIconMusicOffEvents {
}
interface RuxIconMusicOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMusicOff extends SvelteComponent {
    $$prop_def: RuxIconMusicOffProps;
    $$events_def: RuxIconMusicOffEvents;
    $$slot_def: RuxIconMusicOffSlots;
    $on<K extends keyof RuxIconMusicOffEvents>(type: K, callback: (e: RuxIconMusicOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMusicOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMusicOffElement | undefined;
}
export default RuxIconMusicOff;
