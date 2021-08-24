import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTransferWithinAStationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTransferWithinAStation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTransferWithinAStation["size"];
}
interface RuxIconTransferWithinAStationEvents {
}
interface RuxIconTransferWithinAStationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTransferWithinAStation extends SvelteComponent {
    $$prop_def: RuxIconTransferWithinAStationProps;
    $$events_def: RuxIconTransferWithinAStationEvents;
    $$slot_def: RuxIconTransferWithinAStationSlots;
    $on<K extends keyof RuxIconTransferWithinAStationEvents>(type: K, callback: (e: RuxIconTransferWithinAStationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTransferWithinAStationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTransferWithinAStationElement | undefined;
}
export default RuxIconTransferWithinAStation;
