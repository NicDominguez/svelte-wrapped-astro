import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsPowerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsPower["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsPower["size"];
}
interface RuxIconSettingsPowerEvents {
}
interface RuxIconSettingsPowerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsPower extends SvelteComponent {
    $$prop_def: RuxIconSettingsPowerProps;
    $$events_def: RuxIconSettingsPowerEvents;
    $$slot_def: RuxIconSettingsPowerSlots;
    $on<K extends keyof RuxIconSettingsPowerEvents>(type: K, callback: (e: RuxIconSettingsPowerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsPowerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsPowerElement | undefined;
}
export default RuxIconSettingsPower;
