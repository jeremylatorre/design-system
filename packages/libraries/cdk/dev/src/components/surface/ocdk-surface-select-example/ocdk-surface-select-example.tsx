import { Component, Element, h, Host, Listen, Prop, Watch } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  ocdkAssertEventTargetIsNode,
  ocdkDefineCustomElements,
  ocdkIsSurface,
  OcdkLogger,
  OcdkSurface,
  OcdkSurfaceCorner,
} from '@ovhcloud/ods-cdk';
import { OcdkSurfaceSelectItemExample } from './ocdk-surface-select-item-example';

// define custom elements from CDK
ocdkDefineCustomElements()

@Component({
  tag: 'ocdk-surface-select-example',
  styleUrl: 'ocdk-surface-select-example.scss',
  shadow: true,
})
export class OcdkSurfaceSelectExample {
  static totalIds = 0;
  @Element() el!: HTMLStencilElement;
  @Prop({ reflect: true }) value = '';
  @Prop({ reflect: true }) opened = false;
  @Prop({ reflect: true }) animation: null | 'none' = null;
  @Prop({ reflect: false }) debug = false;
  /** anchor reference. can be considered as fulfilled by the stencil ref system */
  private anchor!: HTMLElement;
  /** surface reference. initialized when cdk is */
  private surface?: OcdkSurface = undefined;
  private uniqueId = OcdkSurfaceSelectExample.totalIds++;
  private logger = new OcdkLogger(`OcdkSurfaceSelectExample #${this.uniqueId}`);
  /** is the select was touched by the user */
  private dirty = false;

  /**
   * receive a new selected value and set it as the select value
   * @param event - selected item and its value
   */
  @Listen('ocdkSurfaceSelectItemExampleClick')
  onItemSelection(event: CustomEvent<{ item: OcdkSurfaceSelectItemExample, value: string }>) {
    const details = event.detail;
    this.logger.log('[onItemSelection]', 'one item selected', { details });
    this.value = details.value;
    this.surface?.close();
  }


  // Hide overlay when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  checkForClickOutside(ev: PointerEvent) {
    ocdkAssertEventTargetIsNode(ev.target);
    if (!this.dirty || this.el.contains(ev.target)) { // click on component, do nothing
      return;
    }
    this.logger.log('[checkForClickOutside]', ev);
    this.surface?.close();
  }


  componentDidLoad(): void {
    if (this.surface) {
      this.surface.opened = this.opened;
    }
  }

  @Watch('opened')
  openedChanged(opened: boolean) {
    if (this.surface) {
      this.surface.opened = opened;
    }
  }

  render() {
    const debugHTML = this.debug ?
      <div style={{ fontSize: '0.75rem', color: '#bbbbbb', position: 'absolute', left: '10px' }}>debug: #{this.uniqueId} - value: "{this.value}"</div> : '';
    return (
      <Host>
        <div
          class="trigger"
          onClick={this.handleTriggerClick.bind(this)}
          ref={(el?: HTMLElement) => {
            this.anchor = el as HTMLDivElement;
            this.syncReferences()
          }}>
          {debugHTML}
          <slot name={'trigger'}></slot>
        </div>
        <ocdk-surface
          animation={this.animation ?? 'slipping'}
          animated={this.animation !== 'none'}
          corners={[OcdkSurfaceCorner.BOTTOM_START, OcdkSurfaceCorner.TOP_START]}
          ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences()
            }
          }}>
          <slot></slot>
        </ocdk-surface>
      </Host>
    );
  }


  /**
   * toggle the surface opened when we click on the trigger element
   */
  private handleTriggerClick() {
    this.logger.log('click on trigger');
    this.dirty = true;
    if (!this.surface) {
      return;
    }
    this.surface.opened = !this.surface.opened;
  }

  /**
   * when ready, set the anchor of the surface as the trigger element
   */
  private syncReferences() {
    if (this.surface && this.anchor) {
      this.surface.setAnchorElement(this.anchor);
    }
  }
}
