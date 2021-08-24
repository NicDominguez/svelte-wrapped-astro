import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBluetoothConnectedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBluetoothConnected["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBluetoothConnected["size"];
}
interface RuxIconBluetoothConnectedEvents {
}
interface RuxIconBluetoothConnectedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBluetoothConnected extends SvelteComponent {
    $$prop_def: RuxIconBluetoothConnectedProps;
    $$events_def: RuxIconBluetoothConnectedEvents;
    $$slot_def: RuxIconBluetoothConnectedSlots;
    $on<K extends keyof RuxIconBluetoothConnectedEvents>(type: K, callback: (e: RuxIconBluetoothConnectedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBluetoothConnectedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBluetoothConnectedElement | undefined;
}
export default RuxIconBluetoothConnected;
