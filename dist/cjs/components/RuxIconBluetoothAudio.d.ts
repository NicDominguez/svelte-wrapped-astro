import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBluetoothAudioProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBluetoothAudio["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBluetoothAudio["size"];
}
interface RuxIconBluetoothAudioEvents {
}
interface RuxIconBluetoothAudioSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBluetoothAudio extends SvelteComponent {
    $$prop_def: RuxIconBluetoothAudioProps;
    $$events_def: RuxIconBluetoothAudioEvents;
    $$slot_def: RuxIconBluetoothAudioSlots;
    $on<K extends keyof RuxIconBluetoothAudioEvents>(type: K, callback: (e: RuxIconBluetoothAudioEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBluetoothAudioProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBluetoothAudioElement | undefined;
}
export default RuxIconBluetoothAudio;
