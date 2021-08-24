import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMusicVideoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMusicVideo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMusicVideo["size"];
}
interface RuxIconMusicVideoEvents {
}
interface RuxIconMusicVideoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMusicVideo extends SvelteComponent {
    $$prop_def: RuxIconMusicVideoProps;
    $$events_def: RuxIconMusicVideoEvents;
    $$slot_def: RuxIconMusicVideoSlots;
    $on<K extends keyof RuxIconMusicVideoEvents>(type: K, callback: (e: RuxIconMusicVideoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMusicVideoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMusicVideoElement | undefined;
}
export default RuxIconMusicVideo;
