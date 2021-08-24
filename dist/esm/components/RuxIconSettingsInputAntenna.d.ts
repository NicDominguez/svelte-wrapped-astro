import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsInputAntennaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsInputAntenna["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsInputAntenna["size"];
}
interface RuxIconSettingsInputAntennaEvents {
}
interface RuxIconSettingsInputAntennaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsInputAntenna extends SvelteComponent {
    $$prop_def: RuxIconSettingsInputAntennaProps;
    $$events_def: RuxIconSettingsInputAntennaEvents;
    $$slot_def: RuxIconSettingsInputAntennaSlots;
    $on<K extends keyof RuxIconSettingsInputAntennaEvents>(type: K, callback: (e: RuxIconSettingsInputAntennaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsInputAntennaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsInputAntennaElement | undefined;
}
export default RuxIconSettingsInputAntenna;
