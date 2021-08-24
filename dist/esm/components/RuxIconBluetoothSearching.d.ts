import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBluetoothSearchingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBluetoothSearching["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBluetoothSearching["size"];
}
interface RuxIconBluetoothSearchingEvents {
}
interface RuxIconBluetoothSearchingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBluetoothSearching extends SvelteComponent {
    $$prop_def: RuxIconBluetoothSearchingProps;
    $$events_def: RuxIconBluetoothSearchingEvents;
    $$slot_def: RuxIconBluetoothSearchingSlots;
    $on<K extends keyof RuxIconBluetoothSearchingEvents>(type: K, callback: (e: RuxIconBluetoothSearchingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBluetoothSearchingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBluetoothSearchingElement | undefined;
}
export default RuxIconBluetoothSearching;
