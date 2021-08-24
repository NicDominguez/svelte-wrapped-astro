import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneAndroidProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneAndroid["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneAndroid["size"];
}
interface RuxIconPhoneAndroidEvents {
}
interface RuxIconPhoneAndroidSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneAndroid extends SvelteComponent {
    $$prop_def: RuxIconPhoneAndroidProps;
    $$events_def: RuxIconPhoneAndroidEvents;
    $$slot_def: RuxIconPhoneAndroidSlots;
    $on<K extends keyof RuxIconPhoneAndroidEvents>(type: K, callback: (e: RuxIconPhoneAndroidEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneAndroidProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneAndroidElement | undefined;
}
export default RuxIconPhoneAndroid;
