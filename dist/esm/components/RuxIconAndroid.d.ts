import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAndroidProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAndroid["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAndroid["size"];
}
interface RuxIconAndroidEvents {
}
interface RuxIconAndroidSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAndroid extends SvelteComponent {
    $$prop_def: RuxIconAndroidProps;
    $$events_def: RuxIconAndroidEvents;
    $$slot_def: RuxIconAndroidSlots;
    $on<K extends keyof RuxIconAndroidEvents>(type: K, callback: (e: RuxIconAndroidEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAndroidProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAndroidElement | undefined;
}
export default RuxIconAndroid;
