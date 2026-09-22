// @vitest-environment node
import { describe, expect, it } from "vitest";

import { failureReasonKey } from "./failure-reason-label";
describe("failureReasonLabel", () => {
  it("maps known reasons to i18n keys", () => {
    expect(failureReasonKey("runtime_access_denied")).toBe(
      "failure_reason.runtime_access_denied",
    );
    expect(
      failureReasonKey("agent_error.provider_auth_or_access"),
    ).toBe("failure_reason.agent_error_provider_auth_or_access");
  });

  it("falls back to a user-friendly unknown reason", () => {
    expect(failureReasonKey("not_known_yet")).toBe(
      "failure_reason.default",
    );
    expect(failureReasonKey(null)).toBe("failure_reason.default");
  });
});
