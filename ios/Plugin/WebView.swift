import Foundation

@objc public class WebView: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
