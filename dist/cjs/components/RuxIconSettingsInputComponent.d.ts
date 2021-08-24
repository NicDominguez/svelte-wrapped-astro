import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsInputComponentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsInputComponent["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsInputComponent["size"];
}
interface RuxIconSettingsInputComponentEvents {
}
interface RuxIconSettingsInputComponentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsInputComponent extends SvelteComponent {
    $$prop_def: RuxIconSettingsInputComponentProps;
    $$events_def: RuxIconSettingsInputComponentEvents;
    $$slot_def: RuxIconSettingsInputComponentSlots;
    $on<K extends keyof RuxIconSettingsInputComponentEvents>(type: K, callback: (e: RuxIconSettingsInputComponentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsInputComponentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsInputComponentElement | undefined;
}
export default RuxIconSettingsInputComponent;
