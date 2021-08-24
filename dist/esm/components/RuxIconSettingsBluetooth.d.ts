import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsBluetoothProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsBluetooth["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsBluetooth["size"];
}
interface RuxIconSettingsBluetoothEvents {
}
interface RuxIconSettingsBluetoothSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsBluetooth extends SvelteComponent {
    $$prop_def: RuxIconSettingsBluetoothProps;
    $$events_def: RuxIconSettingsBluetoothEvents;
    $$slot_def: RuxIconSettingsBluetoothSlots;
    $on<K extends keyof RuxIconSettingsBluetoothEvents>(type: K, callback: (e: RuxIconSettingsBluetoothEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsBluetoothProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsBluetoothElement | undefined;
}
export default RuxIconSettingsBluetooth;
