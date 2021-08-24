import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsEthernetProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsEthernet["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsEthernet["size"];
}
interface RuxIconSettingsEthernetEvents {
}
interface RuxIconSettingsEthernetSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsEthernet extends SvelteComponent {
    $$prop_def: RuxIconSettingsEthernetProps;
    $$events_def: RuxIconSettingsEthernetEvents;
    $$slot_def: RuxIconSettingsEthernetSlots;
    $on<K extends keyof RuxIconSettingsEthernetEvents>(type: K, callback: (e: RuxIconSettingsEthernetEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsEthernetProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsEthernetElement | undefined;
}
export default RuxIconSettingsEthernet;
