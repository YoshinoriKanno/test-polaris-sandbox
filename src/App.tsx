import React from 'react';
import './App.css';
import jaTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Card, Button, Frame, Navigation } from '@shopify/polaris';
import {
  ArrowLeftMinor,
  HomeMajor,
  OrdersMajor,
  ConversationMinor,
  CashYenMajor,
  QuestionMarkMajor,
  ReportsMajor,

} from '@shopify/polaris-icons';

const navigationMarkup = (
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          label: 'Back to Shopify',
          icon: ArrowLeftMinor,
        },
      ]}
    />
    <Navigation.Section
      separator
      title="Jaded Pixel App"
      items={[
        {
          label: 'ダッシュボード',
          icon: HomeMajor,
        },
        {
          label: 'ポイント設定',
          icon: OrdersMajor,
        },
        {
          label: '広告配信設定',
          icon: OrdersMajor,
        },
        {
          label: 'レポート',
          icon: ReportsMajor,
        },
        {
          label: '料金プラン',
          icon: CashYenMajor,
        },
        {
          label: 'マニュアル',
          icon: QuestionMarkMajor,
        },
      ]}
    />
  </Navigation>
);

function App() {
  return (
    <AppProvider i18n={jaTranslations}>
      <Frame navigation={navigationMarkup}>

        <Page title="Example app">
          <Card>
            <Button onClick={() => alert('Button clicked!')}>Example button</Button>
          </Card>
        </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
