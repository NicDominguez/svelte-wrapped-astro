import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBluetoothProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBluetooth["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBluetooth["size"];
}
interface RuxIconBluetoothEvents {
}
interface RuxIconBluetoothSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBluetooth extends SvelteComponent {
    $$prop_def: RuxIconBluetoothProps;
    $$events_def: RuxIconBluetoothEvents;
    $$slot_def: RuxIconBluetoothSlots;
    $on<K extends keyof RuxIconBluetoothEvents>(type: K, callback: (e: RuxIconBluetoothEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBluetoothProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBluetoothElement | undefined;
}
export default RuxIconBluetooth;
