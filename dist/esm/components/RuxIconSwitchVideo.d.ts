import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSwitchVideoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSwitchVideo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSwitchVideo["size"];
}
interface RuxIconSwitchVideoEvents {
}
interface RuxIconSwitchVideoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSwitchVideo extends SvelteComponent {
    $$prop_def: RuxIconSwitchVideoProps;
    $$events_def: RuxIconSwitchVideoEvents;
    $$slot_def: RuxIconSwitchVideoSlots;
    $on<K extends keyof RuxIconSwitchVideoEvents>(type: K, callback: (e: RuxIconSwitchVideoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSwitchVideoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSwitchVideoElement | undefined;
}
export default RuxIconSwitchVideo;
