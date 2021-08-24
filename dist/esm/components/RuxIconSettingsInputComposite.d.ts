import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsInputCompositeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsInputComposite["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsInputComposite["size"];
}
interface RuxIconSettingsInputCompositeEvents {
}
interface RuxIconSettingsInputCompositeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsInputComposite extends SvelteComponent {
    $$prop_def: RuxIconSettingsInputCompositeProps;
    $$events_def: RuxIconSettingsInputCompositeEvents;
    $$slot_def: RuxIconSettingsInputCompositeSlots;
    $on<K extends keyof RuxIconSettingsInputCompositeEvents>(type: K, callback: (e: RuxIconSettingsInputCompositeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsInputCompositeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsInputCompositeElement | undefined;
}
export default RuxIconSettingsInputComposite;
