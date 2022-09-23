interface ListItem {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

interface Image {
  thumb: string;
  small: string;
  large: string;
}

interface ProjectInfo {
  type: string;
  id: string;
  name: string;
  image: Image;
}

interface MarketInfo {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}

interface ConversionInfo {
  btc: number;
  eth: number;
  usd: number;
}

interface Ticker {
  base: string;
  target: string;
  market: MarketInfo;
  last: number;
  volume: number;
  converted_last: ConversionInfo;
  converted_volume: ConversionInfo;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: false;
  is_stale: false;
  trade_url: string;
  token_info_url: string | null;
  coin_id: string;
  target_coin_id: string;
}

interface ExchangeStatus {
  description: string;
  category: string;
  created_at: string;
  user: string;
  user_title: string;
  pin: boolean;
  project: ProjectInfo;
}

interface Details {
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
  other_url_1: string;
  other_url_2: string;
  twitter_handle: string;
  has_trading_incentive: boolean;
  centralized: boolean;
  public_notice: string;
  alert_notice: string;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  tickers: string;
  status_updates: ExchangeStatus[];
}
