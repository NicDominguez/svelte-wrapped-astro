import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTabletAndroidProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTabletAndroid["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTabletAndroid["size"];
}
interface RuxIconTabletAndroidEvents {
}
interface RuxIconTabletAndroidSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTabletAndroid extends SvelteComponent {
    $$prop_def: RuxIconTabletAndroidProps;
    $$events_def: RuxIconTabletAndroidEvents;
    $$slot_def: RuxIconTabletAndroidSlots;
    $on<K extends keyof RuxIconTabletAndroidEvents>(type: K, callback: (e: RuxIconTabletAndroidEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTabletAndroidProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTabletAndroidElement | undefined;
}
export default RuxIconTabletAndroid;
