import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSlowMotionVideoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSlowMotionVideo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSlowMotionVideo["size"];
}
interface RuxIconSlowMotionVideoEvents {
}
interface RuxIconSlowMotionVideoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSlowMotionVideo extends SvelteComponent {
    $$prop_def: RuxIconSlowMotionVideoProps;
    $$events_def: RuxIconSlowMotionVideoEvents;
    $$slot_def: RuxIconSlowMotionVideoSlots;
    $on<K extends keyof RuxIconSlowMotionVideoEvents>(type: K, callback: (e: RuxIconSlowMotionVideoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSlowMotionVideoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSlowMotionVideoElement | undefined;
}
export default RuxIconSlowMotionVideo;
