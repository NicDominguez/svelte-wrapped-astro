import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermDataSettingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermDataSetting["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermDataSetting["size"];
}
interface RuxIconPermDataSettingEvents {
}
interface RuxIconPermDataSettingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermDataSetting extends SvelteComponent {
    $$prop_def: RuxIconPermDataSettingProps;
    $$events_def: RuxIconPermDataSettingEvents;
    $$slot_def: RuxIconPermDataSettingSlots;
    $on<K extends keyof RuxIconPermDataSettingEvents>(type: K, callback: (e: RuxIconPermDataSettingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermDataSettingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermDataSettingElement | undefined;
}
export default RuxIconPermDataSetting;
