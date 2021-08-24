import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOndemandVideoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOndemandVideo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOndemandVideo["size"];
}
interface RuxIconOndemandVideoEvents {
}
interface RuxIconOndemandVideoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOndemandVideo extends SvelteComponent {
    $$prop_def: RuxIconOndemandVideoProps;
    $$events_def: RuxIconOndemandVideoEvents;
    $$slot_def: RuxIconOndemandVideoSlots;
    $on<K extends keyof RuxIconOndemandVideoEvents>(type: K, callback: (e: RuxIconOndemandVideoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOndemandVideoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOndemandVideoElement | undefined;
}
export default RuxIconOndemandVideo;
