/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { ScreenName } from '@ulangi/ulangi-common/enums';
import { boundClass } from 'autobind-decorator';

import { NavigatorDelegate } from '../navigator/NavigatorDelegate';
import { SuggestionListDelegate } from '../vocabulary/SuggestionListDelegate';

@boundClass
export class SuggestionsPickerScreenDelegate {
  private suggestionListDelegate: SuggestionListDelegate;
  private navigatorDelegate: NavigatorDelegate;

  public constructor(
    suggestionListDelegate: SuggestionListDelegate,
    navigatorDelegate: NavigatorDelegate,
  ) {
    this.suggestionListDelegate = suggestionListDelegate;
    this.navigatorDelegate = navigatorDelegate;
  }

  public getSuggestions(): void {
    this.suggestionListDelegate.getSuggestions();
  }

  public clearSuggestions(): void {
    this.suggestionListDelegate.clearSuggestions();
  }

  public onSelectSuggestion(fieldName: string, value: string): void {
    this.suggestionListDelegate.onSelectSuggestion(fieldName, value);
  }

  public showLink(link: string, screenTitle: string): void {
    this.navigatorDelegate.showModal(ScreenName.BROWSER_SCREEN, {
      link,
      screenTitle,
    });
  }

  public close(): void {
    this.navigatorDelegate.dismissLightBox();
  }
}
