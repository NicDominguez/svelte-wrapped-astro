import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsCellProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsCell["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsCell["size"];
}
interface RuxIconSettingsCellEvents {
}
interface RuxIconSettingsCellSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsCell extends SvelteComponent {
    $$prop_def: RuxIconSettingsCellProps;
    $$events_def: RuxIconSettingsCellEvents;
    $$slot_def: RuxIconSettingsCellSlots;
    $on<K extends keyof RuxIconSettingsCellEvents>(type: K, callback: (e: RuxIconSettingsCellEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsCellProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsCellElement | undefined;
}
export default RuxIconSettingsCell;
