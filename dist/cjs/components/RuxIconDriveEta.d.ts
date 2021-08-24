import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDriveEtaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDriveEta["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDriveEta["size"];
}
interface RuxIconDriveEtaEvents {
}
interface RuxIconDriveEtaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDriveEta extends SvelteComponent {
    $$prop_def: RuxIconDriveEtaProps;
    $$events_def: RuxIconDriveEtaEvents;
    $$slot_def: RuxIconDriveEtaSlots;
    $on<K extends keyof RuxIconDriveEtaEvents>(type: K, callback: (e: RuxIconDriveEtaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDriveEtaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDriveEtaElement | undefined;
}
export default RuxIconDriveEta;
